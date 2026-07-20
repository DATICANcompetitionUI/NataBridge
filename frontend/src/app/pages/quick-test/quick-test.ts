import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { TestNavBar } from "../../components/nav-bars/test-nav-bar/test-nav-bar";
import { AssessmentTest } from "../../components/assessment/test/assessment-test";

@Component({
  selector: 'nata-quick-test',
  imports: [TestNavBar, AssessmentTest],
  templateUrl: './quick-test.html',
  styleUrl: './quick-test.css',
})
export class QuickTest {
  private authService = inject(AuthService);

  isUserAuthenticated = this.authService.isUserAuthenticated;
}
