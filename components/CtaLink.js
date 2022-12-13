
export default function CtaLink({ data }) {

    return (
        <>
        <div className="cta-link underlined-link" key={data.id}>
            <a href={data.url}>{data.text}</a>
        </div>
        </>
    )
}