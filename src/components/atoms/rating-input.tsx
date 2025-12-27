import type { FunctionComponent } from 'react'
import { useState } from 'react'
import { Star } from 'lucide-react'

interface Props {
    value?: number
    max?: number
    size?: number
    onChange: (value: number) => void
    className?: string
}

const RatingInput: FunctionComponent<Props> = ({ value = 0, max = 5, size = 20, onChange, className = '' }) => {
    const [hover, setHover] = useState<number | null>(null)

    const display = hover ?? value

    return (
        <div className={`inline-flex items-center animate-bounce gap-1 ${className}`}>
            {Array.from({ length: max }).map((_, i) => {
                const idx = i + 1
                const filled = idx <= (display ?? 0)
                return (
                    <button
                        key={idx}
                        type='button'
                        aria-label={`Rate ${idx} stars`}
                        onMouseEnter={() => setHover(idx)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => onChange(idx)}
                        className='p-1'
                    >
                        <Star
                            size={size}
                            strokeWidth={1.5}
                            className={filled ? 'fill-yellow-400 text-yellow-500' : 'text-gray-300'}
                        />
                    </button>
                )
            })}
        </div>
    )
}

export default RatingInput
