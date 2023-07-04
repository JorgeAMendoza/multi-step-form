const Submission = () => {
  return (
    <div>
      <p>checkmark image</p>
      <h2>Thank You!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}

const Confirmation = () => {
  return (
    <div>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>

      {/* results pane */}
      <div>
        {/* plan confirmation */}
        <div>
          <p>
            Plan name <button>Change</button>
          </p>

          <p>plan price</p>
        </div>

        {/* Add-ons */}
        <div>
          <p>
            Add-on name <span>add-on price</span>
          </p>
        </div>
      </div>

      <p>
        Total &#40;per type&#41; <span>price</span>
      </p>

      <div>
        <button type="button">Go Back</button>
        <button type="button">Confirm</button>
      </div>
    </div>
  )
}

export default Confirmation
