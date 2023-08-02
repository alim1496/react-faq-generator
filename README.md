# react-faq-generator

This repository contains a simple Frequently Asked Questions Section generator in React applications.

## Installation

### NPM
```sh
npm install react-faq-generator
```

## Usage
```js
import React from 'react'
import FAQGenerator from 'react-faq-generator'

const MyApp = () => {
	const data = [
		{
			id: 1,
			question: 'What was the main cause of World War I?',
			answer: 'World War I began after the assassination of Austrian archduke Franz Ferdinand by South Slav nationalist Gavrilo Princip on June 28, 1914.'
		},
		{
			id: 2,
			question: 'What countries fought in World War I?',
			answer: 'The war pitted the Central Powers (mainly Germany, Austria-Hungary, and Turkey) against the Allies (mainly France, Great Britain, Russia, Italy, Japan, and, from 1917, the United States).'
		},
		{
			id: 3,
			question: 'How was trench warfare used in World War I?',
			answer: 'The widespread use of machine guns and rapid-firing artillery pieces on the Western Front meant that any exposed soldier was vulnerable.'
		}
	]

	return (
		<FAQGenerator data={data} />
	)
}

export default MyApp
```

## Properties

| Property    | Type            | Default Value          | Description                                                                |
|-------------|-----------------|------------------------|----------------------------------------------------------------------------|
| `data`      | array of object | null                   | An array of questions & answers to be displayed. This prop must be passed. |
| `title`     | string          | 'FAQ'                  | The title of the FAQ section.                                              |
| `className` | string          | ''                     | The name of the class containing customm css rules to be applied.          |


## License

MIT © [alim1496](https://github.com/alim1496)