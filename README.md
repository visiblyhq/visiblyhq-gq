# visiblyhq-gq


A basic component skeleton to help developers create components. All components should have a readme that contains the following:

* Title and Description
* Installation
* Usage
* Settings overview
* Limitations
* Browser spec

Further details on developing components can be found on the [wiki](https://github.com/adaptlearning/adapt_framework/wiki) here: [Developing-plugins](https://github.com/adaptlearning/adapt_framework/wiki/Developers-guide:-components).

## Installation

Please describe the steps required to install your plug-in. You should also detail any dependencies that are not part of the package.json file.


## Usage

Some details of how the plug-in might be used should be given here.


## Settings overview

Each component should come with an example.json which contains an example of the data structure needed for this component to work. This enables developers to copy this over without the need for an editor.

Developers should give some description for data expected for their component and what the setting does. The example.json file for a basic component would contain at least the following:

```
{
    "_id":"c-05",
    "_parentId":"b-05",
    "_type":"component",
    "_component":"adapt-my-component",
    "_classes":"",
    "_layout":"left",
    "title":"My Component",
    "displayTitle":"My Component",
    "body":"",
    "instruction":""
}
```
A description of the core settings can be found at: [Core model attributes](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes)


### Data description

All attributes for your component should be described here. A description for core attributes can be found here: [Core model attributes](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes)


Each component should also contain a properties.schema file. This is a JSON schema of example.json. This file is needed for the component to work with the authoring tool. It describes what fields are needed to edit the component.

## Limitations

Please detail any limitation of your component.

## Browser spec

If you have detailed browser spec you should detail them here.

----------------------------
**Version number:**  2.0.0   <a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a>
**Framework versions:** 5.19.1+
**Author / maintainer:** Adapt Core Team with [contributors](https://github.com/adaptlearning/adapt-contrib-spoor/graphs/contributors)
**Accessibility support:** n/a
**RTL support:** n/a
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge, IE11, Safari 14 for macOS/iOS/iPadOS, Opera
