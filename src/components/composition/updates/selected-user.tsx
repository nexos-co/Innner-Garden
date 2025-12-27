import type { FunctionComponent } from 'react'
import { useState, useMemo } from 'react'
import { mockUpdates } from '@/data/mock-updates'
import { Fades } from '@/components/animate-ui/primitives/effects/fade'
import TextSeparator from '@/components/atoms/text-separator'
import Rating from '@/components/atoms/rating'
import RatingInput from '@/components/atoms/rating-input'
import { Star } from 'lucide-react'

interface User {
    id: number
    name: string
    role?: string
    avatarUrl?: string
}

interface Props {
    user?: User | null
}

interface GroupedUpdate {
    goalId: string
    goal: string
    userId: string
    userName: string
    userAvatar: string
    icon: any
    updates: Array<{
        date: string
        content: string
        trackId: string
        rating?: number
        comments?: Array<{ id: string; userName: string; text: string; date: string }>
    }>
}

const SelectedUserDisplay: FunctionComponent<Props> = ({ user }) => {
    if (!user) {
        return (
            <div className='p-6 rounded-md shadow-sm'>
                <p className='text-sm text-muted-foreground'>Selecciona un usuario para ver detalles.</p>
            </div>
        )
    }

    // Transformar mockUpdates al formato deseado con IDs de rastreo
    const groupedUpdates: GroupedUpdate[] = mockUpdates.map((update) => ({
        goalId: update.goalId,
        goal: update.goal,
        userId: update.userId,
        icon: update.icon,
        userName: update.userName,
        userAvatar: update.userAvatar,
        updates: update.updates.map((upd) => ({
            date: upd.date,
            content: upd.content,
            trackId: `${update.userId}-${update.goalId}-${upd.date}`,
            rating: (upd as any).rating,
            comments: (upd as any).comments,
        })),
    }))

    // start with no user ratings selected (input not pre-marked)
    const [ratings, setRatings] = useState<Record<string, number>>({})

    const [commentsCount] = useState<Record<string, number>>(() => {
        const map: Record<string, number> = {}
        groupedUpdates.forEach((g) => g.updates.forEach((u) => (map[u.trackId] = (u.comments || []).length)))
        return map
    })

    const setRating = (trackId: string, value: number) => {
        setRatings((prev) => ({ ...prev, [trackId]: value }))
    }

    const projectAverages = useMemo(() => {
        const map: Record<string, { avg: number; count: number }> = {}
        groupedUpdates.forEach((g) => {
            const vals = g.updates.map((u) => ratings[u.trackId] ?? 0).filter((v) => v > 0)
            const count = vals.length
            const avg = count ? vals.reduce((a, b) => a + b, 0) / count : 0
            map[g.goalId] = { avg, count }
        })
        return map
    }, [groupedUpdates, ratings])

    return (
        <Fades className='p-6 rounded-md w-full gap-6 flex flex-col items-center justify-center'>
            {groupedUpdates.map((projectGroup) => (
                <div className='w-full max-w-2xl space-y-4'>
                    <TextSeparator>
                        <h1 className='text-lg flex items-center gap-2'>
                            <projectGroup.icon />
                            {projectGroup.goal}</h1>
                    </TextSeparator>
                    <div className='max-w-2xl w-full'>
                        <div className='space-y-4 pl-2'>
                            {projectGroup.updates.map((update) => (
                                <div
                                    key={update.trackId}
                                    className='pb-4 border-b bg-card rounded-md p-4 last:border-b-0'
                                >
                                    <div className="p-3 pt-1">
                                        <div className='flex items-baseline justify-between gap-3'>
                                            <div className='flex items-center gap-4'>
                                                <div className='text-sm text-gray-600'>
                                                    {update.date}
                                                </div>
                                                <div className='text-xs text-gray-500'>
                                                   ( {projectGroup.goal} )
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                {ratings[update.trackId] ? (
                                                    <Rating value={ratings[update.trackId]} />
                                                ) : (
                                                    <RatingInput
                                                        value={ratings[update.trackId] ?? 0}
                                                        onChange={(v) => setRating(update.trackId, v)}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <p className='text-gray-700 mt-5 text-lg leading-relaxed'>
                                            {update.content}
                                        </p>
                                    </div>
                                    <div className='mt-3 border-t pt-3'>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-3'>
                                                <div className='flex items-center gap-1'>
                                                    <Rating value={(update.rating as number) ?? 0} />
                                                </div>
                                                <div className='text-sm text-gray-600'>
                                                    {(update.rating || 0) > 0 ? `${update.rating!.toFixed(1)}` : 'Unrated'}
                                                </div>
                                                <div className='text-xs text-gray-500'>
                                                    ({(update.comments || []).length} comments)
                                                </div>
                                            </div>

                                        </div>

                                        {(update.comments || []).slice(0, 2).map((c) => (
                                            <div key={c.id} className='mt-2 text-xs text-gray-700'>
                                                <span className='font-semibold'>{c.userName}:</span> {c.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1'>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        strokeWidth={1}
                                        className={
                                            projectAverages[projectGroup.goalId]?.avg >= i
                                                ? 'fill-yellow-400 text-yellow-500'
                                                : 'text-gray-300'
                                        }
                                    />
                                ))}
                            </div>
                            <div className='text-sm text-gray-600'>
                                {projectAverages[projectGroup.goalId]?.avg
                                    ? `${projectAverages[projectGroup.goalId].avg.toFixed(1)} (${projectAverages[projectGroup.goalId].count})`
                                    : 'Unrated'}
                            </div>
                        </div>
                        <div className='text-sm text-gray-600'>
                            {projectGroup.updates.reduce((s, u) => s + (commentsCount[u.trackId] || 0), 0)} Comments
                        </div>
                    </div>
                </div>
            ))}
        </Fades>
    )
}

export default SelectedUserDisplay
