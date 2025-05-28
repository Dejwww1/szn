import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
})
export class HabitsComponent {
  newHabit = '';
  habits: { name: string; done: boolean }[] = [];

  addHabit() {
    if (this.newHabit.trim()) {
      this.habits.push({ name: this.newHabit.trim(), done: false });
      this.newHabit = '';
    }
  }

  removeHabit(index: number) {
    this.habits.splice(index, 1);
  }
}
