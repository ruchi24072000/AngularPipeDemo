import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KeyValue } from '@angular/common';

export interface LocalKeyValue<K, V> {
  key: K;
  value: V;
}



@Component({
  selector: 'app-key-value-pipe',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './key-value-pipe.component.html',
  styleUrl: './key-value-pipe.component.css'
})


export class KeyValuePipeComponent {
  obj = {
    c: 476,
    b: 348,
    a: 246,
  };

  mapObj = new Map<string, number>([
    ['c', 123],
    ['b', 456],
    ['a', 789],
  ]);

  orderOriginal = (a: LocalKeyValue<string, number>, b: LocalKeyValue<string, number>): number => {
    return 0;
  }
  
  orderbyValueAsc = (a: LocalKeyValue<string, number>, b: LocalKeyValue<string, number>): number => {
    return a.value - b.value;
  }
 
  orderbyValueDsc = (a: LocalKeyValue<string, number>, b: LocalKeyValue<string, number>): number => {
    return b.value - a.value;
  }


  breeds=
    {
      "corgi": ["cardigan"],
      "deerhound": ["scottish"],
      "bulldog": ["boston", "english", "french"],
      "mastiff": ["bull", "english", "tibetan"],
      "australian": ["shepherd"],
      "greyhound": ["italian"],
      "buhund": ["norwegian"],
      "hound": ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
      "bullterrier": ["staffordshire"],
    }

  

  orderClause = (a: LocalKeyValue<string,[string]>, b: LocalKeyValue<string,[string]>): number => {
    return a.value.length > b.value.length ? -1 : (a.value.length > b.value.length) ? 0 : 1  
 
}

}
