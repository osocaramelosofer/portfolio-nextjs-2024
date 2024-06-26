// https://sdk.vercel.ai/examples/next-app/interface/route-components

export async function AvatarPhoto ({ username }: { username: string }) {
  setTimeout(() => {

  }, 2000)
  return (
      <div className="picture-container max-h-7">
        <img
        className="h-full w-full object-cover"
        src="https://i.pinimg.com/564x/7b/d0/ae/7bd0ae85af661d9225ce672e5d705e35.jpg"
        />
        <span>{username}</span>
      </div>
  )
}
