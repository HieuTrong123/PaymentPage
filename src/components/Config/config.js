import logoAoThun247 from '../../assets/img/logoAoThun247.jpg'
import logoBTP from '../../assets/img/logoBTP.jpg'
import logoDPBTP from '../../assets/img/logoDPBTP.png'
import logoThienTrangTT from '../../assets/img/logoThienTrangTT.jpg'
import logoDefault from '../../assets/img/logoAoThun247.jpg' // Sử dụng khi không tìm đc logo
import logoVBC from '../../assets/img/VBClogo.png'
import logoVP from '../../assets/img/VPlogo.jpg'

const dataRef = {
    'aothun247': {
        logo: logoAoThun247,
        bank: {
            BANKID: 'VPB',
            BANKNAME: 'VPBank - Ngân hàng TMCP Việt Nam Thịnh Vượng',
            BANKLOGO: logoVP,
            ACCOUNT_NO: 118833333,
            ACCOUNT_NAME: 'PHAN THỊ HẠNH'
        }
    },
    'dongphucbtp': {
        logo: logoDPBTP,
        bank: {
            BANKID: 'VCB',
            BANKNAME: 'Vietcombank - Ngân hàng TMCP Ngoại Thương Việt Nam',
            BANKLOGO: logoVBC,
            ACCOUNT_NO: 3383777777,
            ACCOUNT_NAME: 'PHAN THỊ HẠNH'
        }
    },
    'thientrang': {
        logo: logoThienTrangTT,
        bank: {
            BANKID: 'VCB',
            BANKNAME: 'Vietcombank - Ngân hàng TMCP Ngoại Thương Việt Nam',
            BANKLOGO: logoVBC,
            ACCOUNT_NO: 8386777777,
            ACCOUNT_NAME: 'PHAN THỊ HẠNH'
        }
    },
    'default': {
        logo: logoDefault,
        bank: {
            BANKID: 'VPB',
            BANKNAME: 'VPBank - Ngân hàng TMCP Việt Nam Thịnh Vượng',
            BANKLOGO: logoVP,
            ACCOUNT_NO: 118833333,
            ACCOUNT_NAME: 'PHAN THỊ HẠNH'
        }
    },
}

export default dataRef;