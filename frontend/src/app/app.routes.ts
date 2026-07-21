import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Auth } from './pages/auth/auth';
import { QuickTest } from './pages/quick-test/quick-test';
import { QuickTestResult } from './pages/quick-test-result/quick-test-result';
import { Template } from './pages/dashboard/template/template';
import { Home as DashboardHome } from './pages/dashboard/home/home';

export const routes: Routes = [
     {
          path: "",
          component: Home
     },
     {
          path: "auth",
          component: Auth
     },
     {
          path: "assessment",
          component: QuickTest
     },
     {
          path: "assessment/result",
          component: QuickTestResult
     },
     {
          path: "dashboard",
          component: Template,
          children: [
               {
                    path: '',
                    loadComponent: () => import('./pages/dashboard/home/home').then(page => page.Home)
               },
               {
                    path: 'patients',
                    loadComponent: () => import('./pages/dashboard/patients/patients').then(page => page.Patients)
               },
               {
                    path: 'assessment',
                    loadComponent: () => import('./pages/dashboard/assessment/test/user-assessment').then(page => page.UserAssessment)
               },
               {
                    path: 'assessment/result',
                    loadComponent: () => import('./pages/dashboard/assessment/result/user-result/user-result').then(page => page.UserResult)
               },
          ]
     }
];
