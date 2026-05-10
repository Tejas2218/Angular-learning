import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Counter } from './counter/counter';
import { Profile } from './profile/profile';
import { CounterButton } from './counter-button/counter-button';
import { NotFound } from './not-found/not-found';
import { App } from './app';
import { Home } from './home/home';
import { StuData } from './stu-data/stu-data';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'signup', component:Signup},
    {path: 'login', component:Login},
    {path: 'counter', component:Counter},
    {path: 'profile', component:Profile},
    {path: 'counterBtn', component:CounterButton},
    {path: 'stuData', component:StuData},
    {path: '**', component:NotFound}
];
