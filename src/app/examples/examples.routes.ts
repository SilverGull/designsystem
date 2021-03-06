import { Routes } from '@angular/router';
import { AvatarExampleComponent } from './avatar-example/avatar-example.component';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { GridExampleComponent } from './grid-example/grid-example.component';
import { ListExampleComponent } from './list-example/list-example.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'grid',
    },
    {
        path: 'buttons',
        component: ButtonExampleComponent
    },
    {
        path: 'cards',
        component: CardExampleComponent
    },
    {
        path: 'list',
        component: ListExampleComponent
    },
    {
        path: 'grid',
        component: GridExampleComponent
    },
    {
        path: 'avatar',
        component: AvatarExampleComponent
    }
];
