import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import FAQ_QUESTIONS from '../constants/faq.js'

const FAQ = () => {
    return (
        <div className="relative isolate overflow-hidden bg-custom">
            <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex flex-col text-left basis-1/2">
                    <p className="inline-block font-semibold text-primary mb-4">F.A.Q</p>
                    <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions about Pikag Energy</p>
                </div>
                <ul className="basis-1/2">
                    {FAQ_QUESTIONS.map((faq, index) => (
                        <li className='group'>
                            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false">
                                <span className="flex-1 text-base-content">{faq.question}</span>
                                <span className="transform transition-transform duration-300 group-hover:rotate-90"> {`>`} </span>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden">
                                <div className="pb-5 leading-relaxed">
                                    <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FAQ