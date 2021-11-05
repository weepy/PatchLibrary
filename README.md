# PatchLibrary

## Build 

Add neccesary files to the /library folder and build with

`node scripts/build.js`

Which will build a file "library.json"

## Access Index

Files are accessible via: 

`https://raw.githubusercontent.com/{username}/{repo}/{branch}/{file}`


So the library.json can be pulled from 

`https://raw.githubusercontent.com/weepy/PatchLibrary/master/library.json`

which looks like 

```
{
    "version": 4,
    "createdAt": "2021-11-05T09:30:17.710Z",
    "files": {
        "images": {
            "Screenshot 2021-10-12 at 10.07.27.png": 1,
            "Screenshot 2021-10-19 at 09.03.17.png": 1,
            "sub-rainbow-appicon.png": 1
        },
        "samples": {
            "Death trap b3.flac": 1,
            "nested": {},
            "vocals_drums.mp3": 1
        },
        "zipfiles": {
            "looperman-l-4276221-0262522-drumm3r.wav.zip": 1
        }
    }
}
``` 

* version is simply incremented each build
* files contains the folder structure in the the repo 

and the files can be accessed in the same way.

# Access Files

Use the same method above with the folder structure from the library.json

`https://raw.githubusercontent.com/weepy/PatchLibrary/master/files/samples/vocals_drums.mp3`




