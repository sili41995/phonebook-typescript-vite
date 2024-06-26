import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IProps } from './AcceptBtn.types';
import IconButton from '@/components/IconButton';
import { AriaLabels, BtnType, IconBtnType, IconSizes } from '@/constants';

const AcceptBtn: FC<IProps> = ({ disabled = false }) => (
  <IconButton
    disabled={disabled}
    btnType={IconBtnType.accept}
    type={BtnType.submit}
    icon={<FaCheck size={IconSizes.primaryIconSize} />}
    height={36}
    aria-label={AriaLabels.accept}
  />
);

export default AcceptBtn;
