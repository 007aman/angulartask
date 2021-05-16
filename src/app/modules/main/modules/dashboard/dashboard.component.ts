import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../shared/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  OutputData: any;

  constructor(private api: ApiService,private sanitizer: DomSanitizer) { }

  data: any[] = [
    {name: 'test1', type: 'Type1'},
    {name: 'test2', type: 'Type2'},
    {name: 'test3', type: 'Type3'},
    {name: 'test4', type: 'Type4'},
    {name: 'test5', type: 'Type5'}
  ]

  getOutputValue(event: any) {
    this.OutputData = event;
    console.log(event);
  }

  ngOnInit(): void {
    // this.getData();
  }
  ngAfterViewInit(): void {

  }
}
