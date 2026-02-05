export default function Highlight({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="my-10 border-l-4 border-black pl-6">
      <p className="text-xl font-semibold text-gray-900">
        {children}
      </p>
    </div>
  )
}
