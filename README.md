# youtube-metadata-from-url

## Simple module to get a video metadata from url

[![npm](https://img.shields.io/npm/v/youtube-metadata-from-url.svg)](https://www.npmjs.com/package/youtube-metadata-from-url) [![npm](https://img.shields.io/npm/dm/youtube-metadata-from-url.svg)](https://www.npmjs.com/package/youtube-metadata-from-url)

[![NPM](https://nodei.co/npm/youtube-metadata-from-url.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/youtube-metadata-from-url)

**youtube-metadata-from-url** is a simple module to get a youtube metadata passing just the video url.

## Install

Install from the command line
```
$ npm i youtube-metadata-from-url
```
[Install via github package](https://github.com/ezefranca/youtube-metadata-from-url/packages/335535)

## Example

[Try it here](https://runkit.com/embed/7vvzsrwasj03)

```js

const youtube = require('youtube-metadata-from-url');
const url = 'https://youtu.be/TRqiFPpw2fY';

youtube.metadata(url).then(function(json) {
	console.log(json);
}, function(err){
	console.log(err);
});

```

#### Response

```js
{
  title: 'Foo Fighters - The Sky Is A Neighborhood (Official Music Video)',
  author_name: 'foofightersVEVO',
  author_url: 'https://www.youtube.com/user/foofightersVEVO',
  type: 'video',
  height: 113,
  width: 200,
  version: '1.0',
  provider_name: 'YouTube',
  provider_url: 'https://www.youtube.com/',
  thumbnail_height: 360,
  thumbnail_width: 480,
  thumbnail_url: 'https://i.ytimg.com/vi/TRqiFPpw2fY/hqdefault.jpg',
  html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/TRqiFPpw2fY?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}
```


## License

This project is provided for educational purposes only. It is not affiliated with and has
not been approved by Youtube.
