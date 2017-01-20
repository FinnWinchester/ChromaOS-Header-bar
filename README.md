# ChromaOS Header Bar

ChromaOS Header Bar made for AngularJS by Finn Winchester.

[Online test](https://finnwinchester.github.io/ChromaOS-Header-bar/).

## Installation

Via Bower

```
bower install chromaos-header-bar --save
```

## Get started

Include files in your `index.html`:

```
<script src="bower_components/chromaos-header-bar/dist/js/ChromaOSHeaderBar.min.js"></script>
<link href="bower_components/chromaos-header-bar/dist/css/ChromaOSHeaderBar.min.css" rel="stylesheet" />
```

Add `ChromaOSHeaderBar` to your AngularJS project:

```
angular.module('YourProject', ['ChromaOSHeaderBar']);
```

## Usage

### Use the directive

```
<div chromaos-header-bar icon="icon" menus="menus" helpers="helpers" title="title"></div>
```

### Parameters

1. **icon**: _String_. Default icon to show.
2. **menus**: _Array_. Array of menus.
3. **helpers**: _Array_. Array of helpers.
4. **title**: _String_. Default title to show.

## SDK

### How to create Menus

#### The menus parameter is an array of JSON objects with this structure:

1. **title**: _String_. Menu's title.
2. **options**: _Array_. Array of menu's options, following:
  1. **title**: _String_. Option's title.
  2. **action**: _Function_. Option's action.

### How to create Helpers

#### The helpers parameter is an array of JSON objects with this structure:

1. **icon**: _String_. Helper's icon.
2. **title**: _String_. Helper's title.
3. **action**: _Function_. Helper's action.
4. **template**: _String_. Directive to compile and render when open helper.
5. **keepAlive**: _Boolean_. Tells the helper not to close when clicking **inside** the opened content.
6. **config**: _JSON_.
	1. **width**: _String_. The opened content's width (e.g.: "350px").
	2. **height**: _String_. The opened content's height (e.g.: "250px").

### How to interact with the Header Bar

#### Change the system menu (icon and menu options).
```
$rootScope.$broadcast('chromaos-header-bar.system-menu.all.change', { systemMenu: systemMenu });
```

#### Change the system menu's icon.
```
$rootScope.$broadcast('chromaos-header-bar.system-menu.icon.change', { icon: icon });
```

#### Change the system menu's menu options.
```
$rootScope.$broadcast('chromaos-header-bar.system-menu.options.change', { options: options });
```

#### Change the main menu (title and menu options).
```
$rootScope.$broadcast('chromaos-header-bar.main-menu.all.change', { mainMenu: mainMenu });
```

#### Change the main menu's title.
```
$rootScope.$broadcast('chromaos-header-bar.main-menu.title.change', { title: title });
```

#### Change the main menu's menu options.
```
$rootScope.$broadcast('chromaos-header-bar.main-menu.options.change', { options: options });
```

#### Notes

1. Every title (menu's or option's) can contain HTML, like FontAwesome icons.
