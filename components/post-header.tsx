import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className="py-12">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex flex-wrap items-center">
        <div className="md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture}/>
        </div>
        <div className="mb-12 text-lg px-6">
          <DateFormatter dateString={date}/>
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage}/>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex md:hidden flex-wrap items-center">
          <div className="md:block md:mb-12">
            <Avatar name={author.name} picture={author.picture}/>
          </div>
          <div className="text-lg px-6">
            <DateFormatter dateString={date}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
