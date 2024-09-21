import {faqs} from './../../assets/data/faqs'
import FaqItem from "./FaqItems"

const FaqList = () => {
  return (
 <ul className='mt-[38px]'>
    {
faqs.map((item, index) => (
    <FaqItem item={item} key={index}></FaqItem>
))
    }
 </ul>
  )
}

export default FaqList