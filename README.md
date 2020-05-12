# Dummy-Data-CBKM 

 get dummy data like name paragraphs,word,scentences,name,images,banners,placeholders  


---

  ##  Requirements  

For development, you will only need Node.js and a node global package, NPM, installed in your environment. 
  

 ### Install  


`npm i dummy-data-cbkm`  


---


  Currently, we support   


`'paragraph', 'sentence', 'word', 'name', 'phone', 'pic', 'number', 'bool'`  

---



####  getParagraphs (count?< +  integer > , array?< bool >) 

returns :- lorem-ipsum paragraphs of specified count (default=1) & in form of array (true or false)


---


#### getSentences (count?< + integer > , array?< bool >) 

returns :- lorem-ipsum sentences of specified count (default=1) & in form of array (true or false)

---



#### getWords (count?<+  integer > , array?< bool >) 

returns :- lorem-ipsum words of specified count (default=1) & in form of array (true or false)


---


### Some Advance functions

#### getNames (count?< + integer > , gender?< char > , array?< bool > , join < char >)

|parameter|defaults  |options|
|--|--| -- |
| count | 1 | any number|
|gender|' a ' (any)|' m ' ,' f '|
|array|false|true , false |
|join|' , '|any character |


---


#### getPicLink (width?<+  integer> , height?<+  integer> , count?<+  integer> , array?< bool > ,  join < char >)


|parameter|defaults  |options|
|--|--| -- |
| width | 200 | any number|
| height | 200 | any number|
| count | 1 | any number|
|array|false|true , false |
|join|' , '|any character |


---

#### getPlacholderLink (count?< + integer > ,  params? < json >  , array?< bool > ,  join < char >)



|parameter|defaults  |options|
|--|--| -- |
| count | 1 | any number|
|prams.config|' 150x150 '| ' w x h '|
|prams.background|' #cccccc '| ' #RRGGBB '|
|prams.foreground|' #969696 '| ' #RRGGBB '|
|prams.text|' '| any string|
|array|false|true , false |
|join|' , '|any character |



---

#### getProfileLink( count?< + integer > ,  gender? < char >  , array?< bool > ,  join < char >)




parameter|defaults  |options|
|--|--| -- |
| count | 1 | any number|
|gender|' a ' (any)|' m ' ,' f '|
|array|false|true , false |
|join|' , '|any character |


---


#### coustom ( body?< json > )

It can only be discovered by the following example 

  `{
    "paragraphs": {
      "type": "paragraph",
      "option": {
        "max": 16,
        "min": 4
      }
    },
    "sentence": {
      "type": "sentence",
      "option": {
        "max": 8,
        "min": 4
      }
    },
    "word": "word",
    "name": {
      "type": "name",
      "option": {
        "gender": "m"
      }
    },
    "phone": "phone",
    "pic": {
      "type": "pic",
      "option": {
        "width": 300,
        "height": 400
      }
    },
    "number": {
      "type": "number",
      "option": {
        "max": 10000,
        "min": 100
      }
    },
    "bool": "bool"
  }`












### note names gathered from:-


https://github.com/rossgoodwin/american-names




