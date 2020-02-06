import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public dummy = [1,1,1,1]

  htmlText ="<h2>Delta<span style='color: #0ac775'>Codes</span><h2> <br> <h4 style='color: #333'>Start writing a Blog</h4>"


  quillConfig={
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
       // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        //[{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video']  
        //['emoji'], 
      ],
      handlers: {'emoji': function() {}}
    },
  };

  onSelectionChanged = (event) =>{
    if(event.oldRange == null){
      this.onFocus();
    }
    if(event.range == null){
      this.onBlur();
    }
  }

  public contentChanged: boolean = false;
  public focused: boolean = false;
  onContentChanged = (event) =>{
    console.log(event);
    if(this.focused) {
      this.contentChanged = true;
    }
  }

  onFocus = () =>{
    console.log("On Focus");
    this.focused = true;
  }
  onBlur = () =>{
    console.log("Blurred");
  }


}
