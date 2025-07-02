import { EditorComponent } from '@tinymce/tinymce-angular';

// Thay bằng Hugging Face API token của bạn (bắt đầu bằng hf_)
const api_key = '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';

// Sử dụng model từ curl command
const model = 'meta-llama/llama-3.1-8b-instruct';

export const init: EditorComponent['init'] = {
  plugins: [
    'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
    'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
  ],
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author name',
  mergetags_list: [
    { value: 'First.Name', title: 'First Name' },
    { value: 'Email', title: 'Email' },
  ],
  ai_request: (request: any, respondWith: { string: (arg0: (signal: AbortSignal) => Promise<string>) => any }) => {
    // Sử dụng Hugging Face Router API theo format curl
    const huggingFaceOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: request.prompt
          }
        ],
        model: model,
        stream: false,
        max_tokens: 500,
        temperature: 0.7
      })
    };

    respondWith.string((signal: AbortSignal) =>
      window.fetch(`https://router.huggingface.co/novita/v3/openai/chat/completions`, {
        signal,
        ...huggingFaceOptions
      }).then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          console.error('HF API Error:', response.status, errorText);
          throw new Error(`Hugging Face API error: ${response.status} - ${errorText}`);
        }
        return response.json();
      }).then((data) => {
        console.log('HF Response:', data);

        // Xử lý response theo OpenAI format
        if (data.choices && data.choices.length > 0) {
          const message = data.choices[0].message;
          if (message && message.content) {
            return message.content.trim();
          }
        }

        // Nếu không có choices, thử format khác
        if (data.generated_text) {
          return data.generated_text.trim();
        }

        // Fallback
        throw new Error('No valid response from API');

      }).catch((error) => {
        console.error('Hugging Face API Error:', error);

        // Fallback về API Inference cũ nếu Router API không hoạt động
        return window.fetch(`https://api-inference.huggingface.co/models/${model}`, {
          signal,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api_key}`
          },
          body: JSON.stringify({
            inputs: request.prompt,
            parameters: {
              max_new_tokens: 500,
              temperature: 0.7,
              return_full_text: false
            },
            options: {
              wait_for_model: true
            }
          })
        }).then(async (response) => {
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Fallback API also failed: ${response.status} - ${errorText}`);
          }
          return response.json();
        }).then((data) => {
          if (Array.isArray(data) && data[0]?.generated_text) {
            return data[0].generated_text.trim();
          }
          throw new Error('No valid response from fallback API');
        }).catch((fallbackError) => {
          console.error('Both APIs failed:', fallbackError);
          return 'Xin lỗi, AI service hiện tại không khả dụng. Vui lòng thử lại sau.';
        });
      })
    );
  }
};
