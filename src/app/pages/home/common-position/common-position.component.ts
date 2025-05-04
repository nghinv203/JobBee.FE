import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {ICommonPosition} from './common-position.model';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-common-position',
  imports: [
    TranslatePipe,
    DecimalPipe
  ],
  standalone: true,
  templateUrl: './common-position.component.html',
  styleUrl: './common-position.component.scss'
})
export class CommonPositionComponent {
  testData: ICommonPosition[] = [
    { id: 'test1', name: 'Nhân Viên Bán Hàng', amount: 100 },
    { id: 'test2', name: 'Quản Lý Cửa Hàng', amount: 10 },
    { id: 'test3', name: 'Thu Ngân', amount: 20 },
    { id: 'test4', name: 'Bảo Vệ', amount: 15 },
    { id: 'test5', name: 'Nhân Viên Kho', amount: 30 },
    { id: 'test6', name: 'Trợ Lý Quản Lý', amount: 5 },
    { id: 'test7', name: 'Nhân Viên Marketing', amount: 8 },
    { id: 'test8', name: 'Nhân Viên IT', amount: 12 },
    { id: 'test9', name: 'Nhân Viên Giao Hàng', amount: 25 },
    { id: 'test10', name: 'Nhân Viên CSKH', amount: 18 },
    { id: 'test11', name: 'Thực Tập Sinh', amount: 6 },
    { id: 'test12', name: 'Giám Sát Khu Vực', amount: 4 },
  ];
}
