# A failed project
- Application was build a while ago but i was not optimistic to push it. 
- play Store publishTime: 27 jan 2024
- play Store Link: https://play.google.com/store/apps/details?id=com.sarrast.tasker
### I am not paying openAI for model so responses are not coming but ocr is functional and UI is ok i guess...
## I might hit back after a while with my learnings from failure


# why i am sharing this
- My real challenge was to build the expo codebase.
- I resolved most of the build issues that were not on the web, i backtracked a lot of things and it took me about a month to resolve issues.
 ### Everything was fine in dev mode but by the time started building it used to crash
  - The whole web i had access to was not answering my call as there was no resolutions to my error.
  - In development mode default way of setting entrypoint was working but it was causing error during **build**
  - Had to create a new file **customEntrypoin.js** and configure it somewhre in .expo/node_modules **build error will take us to that location** 
  
# That's it from me
