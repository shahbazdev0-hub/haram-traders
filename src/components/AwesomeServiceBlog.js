import Link from 'next/link'

export default function AwesomeServiceBlog({ cardStyle, title, iconName, desc }) {
    return (
        <div className="icon-bx-wraper style-1 box-hover text-center m-b30">
            <div className={`icon-bx-md radius ${cardStyle}`}>
                <Link href="#" scroll={false} className="icon-cell">
                    <i className={iconName} />
                </Link>
            </div>
            <div className="icon-content">
                <h5 style={{ fontSize: '18px'}} className="dlab-title">{title}</h5>
                <p style={{ fontSize: '14px'}}>
                    {desc}
                </p>
            </div>
        </div>
    )
}