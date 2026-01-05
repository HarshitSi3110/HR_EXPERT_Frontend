import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-attendance-home',
  imports: [RouterModule],
  templateUrl: './attendance-home.html',
  styleUrl: './attendance-home.scss',
})
export class AttendanceHome {
totalEmployees = 12;
  presentToday = 9;
  absentToday = 3;
}
