import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from '../../services/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.css'
})
export class UsermanagementComponent implements OnInit{


  
  displayedColumns: string[] = ['id', 'firstName', 'username', 'email'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
payment: any;

  constructor(
    private userServiceService:UserServiceService,
    private dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  open(payment: any){}

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '580px',
      height: '800px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllUsers();
      if (result) {
      
        this.getAllUsers();
        console.log('User  modal closed with data:', result);
      }
    });
  }

  getAllUsers(){
    this.userServiceService.getAllUsers().subscribe(data =>{
      this.dataSource = data;
      this.paginator=data;
      this.sort=data;
    });
  }

}



