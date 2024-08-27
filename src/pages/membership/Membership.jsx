import "./Membership.css"
import OneBenefit from "../../components/OneBenefit"
import { benefitsClub, benefitsVip } from "../../data/data"

const Membership = () => {
  return (
    <>
      <section className="club">
        <div className="container">
          <div className="benefits">
            <h2 className="section-title">
              Všechny výhody sneakers clubu
            </h2>
            <div className="all-benefits-club">
              {benefitsClub.map((item, index) => {
                return <OneBenefit key={index} {...item} />
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="vip">
        <div className="container">
          <div className="vip-member">
            <h2 className="section-title">
              Staň se VIP členem Sneakers Club
            </h2>
            <h3 className="subtitle">
              Exkluzivní výhody VIP členství Sneakers Club
            </h3>
            <div className="all-benefits-vip">
              {benefitsVip.map((item, index) => {
                return <OneBenefit key={index} {...item} />
              })}
            </div>
            <button>Zaregistrovat se</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Membership