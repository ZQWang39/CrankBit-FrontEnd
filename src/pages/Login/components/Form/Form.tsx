import { FC } from 'react'
import { Link } from 'react-router-dom'

const Form: FC = () => (
  <div className="w-[280px] h-[356px]">
    <h1 className="text-textColorBlack text-4.5 mb-5 font-medium">Welcome back, Alonso</h1>
    <div>
      <div>
        <p className="text-4 leading-5 font-medium">Work email</p>
        <input
          className="box-border pl-[3px] w-[280px] h-11 mb-6 border border-background rounded-[5px] placeholder-shown:border-gray-500"
          placeholder="  Alonso@mail.com"
        />
      </div>
      <div>
        <p className="text-4 leading-5 font-medium">Your site</p>
        <input
          className="box-border pl-[3px] w-[280px] h-11 mb-6 border border-background rounded placeholder-shown:border-gray-500 "
          placeholder="                                             .crankbit.net "
        />
      </div>
      <div>
        <p className="text-4 leading-5 font-normal text-[#1E1E1E66]">
          By clicking below, you agree to the Crankbit Cloud Terms of Service and Privacy Policy.
        </p>
      </div>

      <button
        type="button"
        className="w-[280px] h-[50px] hover:bg-sky-700 text-white bg-[#007AD3] text-4.5 leading-5 font-bold rounded-[5px] mt-5"
      >
        Agree
      </button>
      <br />
      <br />
      <div>
        <Link to="/auth/login/reset-password" className="m-10">
          <button
            type="submit"
            className="w-[280px] h-[50px] hover:bg-sky-700  text-white bg-blue-500 font-bold rounded-[5px]"
          >
            {' '}
            Forget your password?
          </button>
        </Link>
      </div>
    </div>

    <button
      type="button"
      className="w-[280px] h-[50px] hover:bg-sky-700 text-white bg-[#007AD3] text-4.5 leading-5 font-bold rounded-[5px] mt-5"
    >
      Agree
    </button>
  </div>
)

export default Form
