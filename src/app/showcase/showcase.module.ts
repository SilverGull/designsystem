import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {COMPONENT_IMPORTS, COMPONENT_EXPORTS, COMPONENT_DECLARATIONS} from './showcase.common';
import {HtmlViewerComponent} from '../shared/html-viewer/html-viewer.component';

@NgModule({
  imports: [
    ...COMPONENT_IMPORTS,
    CommonModule,
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS,
    HtmlViewerComponent
  ],
  exports: COMPONENT_EXPORTS
})
export class ShowcaseModule { }
