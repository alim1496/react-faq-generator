import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import FAQGenerator from './FAQGenerator'

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
	test('It should be displayed', () => {
		const { container } = render(<FAQGenerator data={data} />)
		expect(container.getElementsByClassName('faq-container').length).toBe(1)
	})

  test('Title should be displayed if not passed', () => {
    const { container } = render(<FAQGenerator data={data} />)
		const titleHolder = container.getElementsByClassName('faq-title')[0]
    expect(titleHolder.innerHTML).toBe('FAQ')
  })

  test('Title should be displayed alike as it is passed', () => {
    const { container } = render(<FAQGenerator data={data} title="Questions Asked Most" />)
		const titleHolder = container.getElementsByClassName('faq-title')[0]
    expect(titleHolder.innerHTML).toBe('Questions Asked Most')
  })

  test('Custom className should be displayed if passed', () => {
    const { container } = render(<FAQGenerator data={data} className="custom-container" />)
		expect(container.getElementsByClassName('custom-container').length).toBe(1)
  })

  test('Data should be displayed', () => {
    const { container } = render(<FAQGenerator data={data} />)
		expect(container.getElementsByTagName('details').length).toBe(3)
  })
})
