import { PostService } from './../services/Post.Service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { AppError } from '../common/app-error';
import { BadInputError } from '../Common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {

  posts: any = [];
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe((posts: []) => {

      for (let index = 0; index < posts.length; index++) {
        this.posts.push(JSON.parse(JSON.stringify(posts[index])));
      }

    })
  };

  createPost(input: HTMLInputElement) {

    let post = { title: input.value, body: 'bar', userId: 1 };
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
      .subscribe(
        (newPost: any) => {
          post['id'] = newPost.id
        },
        (error: AppError) => {
          this.posts.splice(0, 1);
          if (error instanceof BadInputError) {
            //this.form.setErrors(error.originalError);
          }
          else throw error;
        });

  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          if (error instanceof NotFoundError){}
            // alert('This post has already been deleted.');
           throw error;
        });
  }

}



      // for (let index = 0; index < this.posts[0].length; index++) {
      //   let element = this.posts[0][index];
      //   debugger;
      //   (this.form.get('topics') as FormArray).push(new FormControl(element));
      // }

// form;
// x: any = [];
// posts: any = [];
// constructor(fb: FormBuilder, private service: PostService) {
//   this.form = fb.group({
//     topics: fb.array([this.posts])
//   })
// }


  // get topics(): any { return this.form.get('topics').controls; }




  // addTopic(topic: HTMLInputElement) {
  //   (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  //   topic.value = '';
  // }

  // removeTopic(topic: FormControl) {
  //   let index = (this.form.get('topics') as FormArray).controls.indexOf(topic);
  //   (this.form.get('topics') as FormArray).removeAt(index);

  // }



  // form = new FormGroup({
  //   account: new FormGroup({
  //     username: new FormControl('', {
  //       validators: [ Validators.required,Validators.minLength(3)],        
  //       asyncValidators: [UserNameValidators.ShouldBeUnique]
  //   }),
  //     password: new FormControl('', {
  //       validators: [ Validators.required,Validators.minLength(3)],
  //       asyncValidators: [UserNameValidators.ShouldBeUnique]        
  //   }),
  //   })

  // })


  // public get password() {
  //   console.log(this.form.get('account.password'));
  //   return this.form.get('account.password');
  // }

  // public get username() {
  //   console.log(this.form.get('account.username'));
  //   return this.form.get('account.username');
  // }

  // Login() {
  //   this.form.setErrors({ invalidLogin: true })
  // }


