import { Routes, RouterModule} from '@angular/router';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { CreateSheetComponent } from './createSheet/create-Sheet.component';

const routes:Routes = [
	{ path: '', redirectTo: 'my-projects', pathMatch: 'full'},
	{ path: 'my-projects', component: MyProjectComponent },
	{ path: 'my-tasks', component: MyTaskComponent },
	{ path: 'create-a-sheet', component: CreateSheetComponent },
]

export const appRouterModule = RouterModule.forRoot(routes);