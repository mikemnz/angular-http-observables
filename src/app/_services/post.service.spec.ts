/* tslint:disable:no-unused-variable */

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject, getTestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Circle2 } from '../shared/circle';
import { PostService } from './post.service';

fdescribe('Service: Post', () => {
  let postService: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });

    postService = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

  it('should not immediately connect to the server', () => {
      httpMock.expectNone({});
  });

  it(`should fetch posts as an Observable`, waitForAsync(inject([HttpTestingController, PostService],
    (httpClient: HttpTestingController, postSvc: PostService) => {

      const postItem = [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
          userId: 1,
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
        }
      ];


      postSvc.getPosts()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

      const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
      expect(req.request.method).toBe('GET');

      req.flush(postItem);
      httpMock.verify();

    })));

  // tslint:disable-next-line: only-arrow-functions
  it('should track that the spy was called', function() {
      const c = new Circle2();
      spyOn(c,'circumference');
      c.circumference(2);
      expect(c.circumference).toHaveBeenCalled();
  });

  // tslint:disable-next-line: only-arrow-functions
  it('should track the arguments of its calls', function() {
      const c = new Circle2();
      spyOn(c,'circumference');
      c.circumference(2);
      expect(c.circumference).toHaveBeenCalledWith(2);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('should track the number of times the spy was called', function() {
    const c = new Circle2();
    spyOn(c,'circumference');
    c.circumference(2);
    expect(c.circumference).toHaveBeenCalledTimes(1);
  });

});


