import {ImStatsBars} from 'react-icons/im'

function Nav(){
    return <header className='container max-w-2xl px-6 py-6 mx-auto'>

    <div className="flex items-center justify-between">

      {/* user information */}
      <div className="flex items-center gap-2">

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

      {/* right side */}
      <nav className="flex items-center gap-4">
        <div>
          <ImStatsBars className='text-2x'/>
        </div>
        <div>
          <button className='btn btn-danger'>Keluar</button>
        </div>
      </nav>

    </div>

  </header>
}

export default Nav;