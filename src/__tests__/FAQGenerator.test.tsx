import React from 'react'
import { render, screen } from '@testing-library/react'
import FAQGenerator from '../FAQGenerator'

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

describe('The FAQ container render', () => {
	it('It should display FAQ title', () => {
		render(<FAQGenerator data={data} />)
		expect(screen.getByText(/FAQ/)).toBeInTheDocument()
	})
})
