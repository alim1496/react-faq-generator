import React, { FC } from 'react'
import './faqGenerator.css'

type Info = {
	id: number
	question: string
	answer: string
}

interface FAQProps {
	data: Info[]
	title?: string
	className?: string
	darkMode?: boolean
}

const FAQGenerator: FC<FAQProps> = ({ title = 'FAQ', className = '', data, darkMode = false }) => {
	return (
		<div data-testid="faq-container" className={`faq-container ${darkMode ? 'faq-dark' : ''} ${className}`}>
			<div className="faq-title">{title}</div>
			<div className="content-wrapper">
				{data?.map((_query) => (
					<details key={_query.id}>
						<summary>
							<span>{_query.question}</span>
							<b></b>
						</summary>
						<div className="answer">{_query.answer}</div>
					</details>
				))}
			</div>
		</div>
	)
}

export default FAQGenerator
