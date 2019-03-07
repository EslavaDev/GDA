import { CotizarPage } from '../../pages/contizar/cotizando/cotizacion'
import { validarPage } from '../contizar/validarCotizacion/validar';
import { pageAceptado } from '../contizar/cotizacion-aceptada/cotizacion-aceptada';
import { PageCotiTermina } from "../contizar/coti-termina/coti-termina";
import { PageTerminado } from '../contizar/terminado/terminado';
import { PageSend } from '../contizar/send-cotizacion/send'
import { PageResult } from "../contizar/result/result";
import { MyServicePage } from "../contizar/my-service/my-service";

export const SERVICE_COTIZAR = [
  CotizarPage,
  validarPage,
  pageAceptado,
  PageCotiTermina,
  PageTerminado,
  PageSend,
  PageResult,
  MyServicePage
]

