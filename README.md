# Angular4_Firebase
Angular 4 + Firebase v4.3 

Functionality: 
<ul><li>Simple blog with CRUD functionality and abilities for uploads your files to storage</li>
<li>Form Constructor where in right side of the page you can see a preview of you form and:
<ul>
<li>Create simple form with: Title, ID, Headder text and Reset button</li>
<li>Addition for form infinite count of input fields with: Label text, Placeholder text, Make it required or not, Set type of field: Input, Checkbox, File 
and other</li></ul></li>
<li>Form constructor which get your form from the DB by ID and make simple validation before saving results in DB.
<br>You can use 2-3 or more forms form in one page. They are all will be works as well.</li>
<li>Component for show you the results from forms also with CRUD and pipes for sorting this list.</li>
<li>And few other smaller components like: "Page not Found", Error handler if ethernet connection will be lost...</li>
</ul>
It's not a fully completed project but it can give you a first look for big part for functionality of Firebase v4.3 + Angular 4. Maybe my code not best for hightload performance but I was trying write a understandeble code wich I or You can rewrite in any time.

For start you need account in https://firebase.google.com/ , Firebase must be instaled in your Angular 2/4 project (All instruction you can find in Firebase documentation after registration) also need  added Bootstrap 4 styles and  Rx/JS.

Also all rules in Firebase DataBase and Storage must be seted to for anonims users can read and write:
<br>
For DB:
<pre>
{
  "rules": {
    ".read": "true",
    ".write": "true",
    "$formsResult ": {
    ".indexOn": "priority"
    }   
  }
}
</pre>
<br>

For Storage: <br>
<pre>
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
</pre>
You can create component for verify user permission and change this parameters.

After that, all what you need - it's a clone this repository to  .../app/  folder in your project.
