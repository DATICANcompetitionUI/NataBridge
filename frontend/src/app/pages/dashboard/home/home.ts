import { Component, computed } from '@angular/core';

@Component({
  selector: 'nata-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = "jane"

  assessmentDetails = computed(() => ({
    high: 10,
    mid: 12,
    low: 5
  }));
  totalAssessments = computed(() => {
    const total = this.assessmentDetails().high + this.assessmentDetails().mid + this.assessmentDetails().low

    return total;
  });
}
