import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { TestNavBar } from '../../components/nav-bars/test-nav-bar/test-nav-bar';
import { AssessmentTest } from '../../components/assessment/test/assessment-test';
import { PageLoader } from '../../components/loaders/page-loader/page-loader';

@Component({
  selector: 'nata-quick-test',
  imports: [TestNavBar, AssessmentTest, PageLoader],
  templateUrl: './quick-test.html',
  styleUrl: './quick-test.css',
})
export class QuickTest {
  private authService = inject(AuthService);

  isUserAuthenticated = this.authService.isUserAuthenticated;
}
