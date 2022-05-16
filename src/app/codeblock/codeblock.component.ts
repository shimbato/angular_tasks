import { Component, OnInit } from '@angular/core';
import { Characters } from './type';

@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.css'

  ]
})
export class CodeblockComponent implements OnInit {

  name = 'angular';
  
  characters: Characters []=[]
  


  ngOnInit() {
    fetch('https://breakingbadapi.com/api/characters')
    .then(response=>response.json())
    .then(res=>this.characters=res) 
     console.log (this.characters)
  }



  getCharacterColor(character: Characters) {
    if (character.status === 'Alive') return 'white'
    if (character.status === 'Deceased') return 'darkred'
    if (character.status === 'Presumed dead') return 'grey'
    return 'black'
  }


}
