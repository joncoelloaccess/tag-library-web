# tag-profile

















## Demos

















#### Basic profile

















```html








<tag-profile name="Kevin Anderson"></tag-profile>








```

















#### Optional Gender

















```html








<tag-profile








  name="Kevin Anderson"








  gender="Male"








  dob="08/Aug/1982"








  nationality="British"








  ></tag-profile>








```

















#### With edit profile event listener

















```html








<tag-profile








  name="Kevin Anderson"








  gender="Male"








  dob="08/Aug/1982"








  nationality="British"








  src="http://ux.accessacloud.com/StyleGuide/Live/Content/img/rachel.jpg"








  ></tag-profile>

















<script>








  window.addEventListener("editProfileImage", function () {








    console.log('yo yo yo');








  });








</script>








```

















<!-- Auto Generated Below -->


## Properties

#### dob

string


#### gender

string


#### name

string

Name of user profiled


#### nationality

string


#### src

string

Src of profile image


## Attributes

#### dob

string


#### gender

string


#### name

string

Name of user profiled


#### nationality

string


#### src

string

Src of profile image


## Events

#### editProfileImage



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
