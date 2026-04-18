import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

function LogoutPopup({ trigger, onConfirm }) {
  return (
    <Popup
      modal
      trigger={trigger}
      contentStyle={{
        width: '320px',
        height: '200px',
        borderRadius: '10px',
        padding: '20px',
      }}
      overlayStyle={{
        backdropFilter: 'blur(6px)',
        background: 'rgba(0,0,0,0.4)'
      }}
    >
      {(close) => (
        <div className="flex flex-col justify-center items-center text-center h-full gap-4">

          <h2 className="text-sm md:text-lg font-semibold">
            Are you sure you want to logout?
          </h2>

          <div className="flex gap-4">

            <button
              onClick={close}
              className="cursor-pointer relative overflow-hidden border border-blue-500 rounded-sm py-1 px-6 text-blue-500 group hover:border-0"
            >
              <span className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-white">
                Cancel
              </span>
            </button>

            <button
              onClick={() => {
                onConfirm()
                close()
              }}
              className="cursor-pointer relative overflow-hidden border border-blue-500 rounded-sm py-1 px-6 text-blue-500 group hover:border-0"
            >
              <span className="absolute inset-0 bg-primary -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-white">
                Logout
              </span>
            </button>

          </div>

        </div>
      )}
    </Popup>
  )
}

export default LogoutPopup