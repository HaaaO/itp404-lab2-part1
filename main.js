


Handlebars.registerHelper('number-format',(number)=>{
  return number.toLocaleString();

});


$(document).ready(function(){



      let postsTemplateString = document.getElementById('results-template').innerHTML;
      let renderPosts = Handlebars.compile(postsTemplateString);


        $('#results').html(`<div class ="loader" ></div>`);


        var url ="https://thejsguy.com/teaching/2018/api/restaurants.json";
        let promise = $.ajax({
          type:'GET',
          url: url
        });


      promise.then((posts)=>{
        console.log(posts);
        console.log(renderPosts);


        let renderedPosts = renderPosts({
          posts : posts.data
        });
        console.log(renderedPosts);
        $('#results').html(renderedPosts);
        },() =>{

        $('#results').html(`<a>Oops! Something went wrong!</a>`);

    });

});
