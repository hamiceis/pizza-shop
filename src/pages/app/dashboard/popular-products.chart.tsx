import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {} satisfies ChartConfig

const data = [
  {
    product: 'Pepperoni',
    amount: 40,
  },
  {
    product: 'Mussarela',
    amount: 35,
  },
  {
    product: 'Marguerita',
    amount: 10,
  },
  {
    product: 'Frango e queijo',
    amount: 60,
  },
  {
    product: 'Frango',
    amount: 46,
  },
]
const COLORS = [
  colors.sky['500'],
  colors.amber['500'],
  colors.violet['500'],
  colors.emerald['500'],
  colors.rose['500'],
]

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle>Produtos populares</CardTitle>
          <BarChart className="size-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-60 w-full">
          <PieChart style={{ fontSize: 12 }} accessibilityLayer>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={54}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              } // Adiciona rótulos
              labelLine={false}
            >
              {data.map((_, i) => {
                return (
                  <Cell
                    key={`cell-${i}`}
                    fill={COLORS[i]}
                    stroke="black" // Ajuste de stroke direto aqui
                    strokeWidth={8} // Ajuste da borda
                    className="hover:opacity-80"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
