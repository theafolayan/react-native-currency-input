import React, { useCallback } from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface MoneyInputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  value: number | null;
  onValueChange: (val: number | null) => void;
  currency?: string; // Default: 'NGN'
  locale?: string; // Default: 'en-NG'
}

const MoneyInput: React.FC<MoneyInputProps> = ({
  value,
  onValueChange,
  currency = 'NGN',
  locale = 'en-NG',
  ...props
}) => {
  const formatAsCurrency = (val: number) => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(val / 100);
  };

  const handleChangeText = useCallback(
    (text: string) => {
      const cleanedText = text.replace(/\D/g, '');
      const numericValue = parseInt(cleanedText, 10);
      onValueChange(isNaN(numericValue) ? null : numericValue);
    },
    [onValueChange]
  );

  const displayValue = value !== null && !isNaN(value) ? formatAsCurrency(value) : '';

  return (
    <TextInput
      {...props}
      value={displayValue}
      onChangeText={handleChangeText}
      keyboardType="number-pad"
      placeholder={formatAsCurrency(0)}
    />
  );
};

export default MoneyInput;
