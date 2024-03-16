export default function Home() {
  return <header>
    {/* user information */}
    <div>
      {/* img */}
      <div className="h-[40px] w-[40px] rounded-full overflow-hidden">

        <img 
          src="https://thispersondoesnotexist.com" 
          alt="Profile Image" 
          />
      </div>

      {/* name */}
      <small>Hi, Dhina!</small>
    </div>
  </header>
}
