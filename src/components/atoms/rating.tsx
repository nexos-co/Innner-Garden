import type { FunctionComponent } from 'react'
import { Star } from 'lucide-react'

interface Props {
    value: number
    max?: number
    size?: number
    className?: string
}

const Rating: FunctionComponent<Props> = ({ value, max = 5, size = 20, className = '' }) => {
    return (
        <div className={`inline-flex items-center gap-1 ${className}`}>
            {Array.from({ length: max }).map((_, i) => {
                const idx = i + 1
                return (
                    <div className="p-1">
                        <Star
                            key={idx}
                            size={size}
                            strokeWidth={1.5}
                            className={idx <= Math.round(value) ? 'fill-yellow-400 text-yellow-500' : 'text-gray-300'}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Rating
